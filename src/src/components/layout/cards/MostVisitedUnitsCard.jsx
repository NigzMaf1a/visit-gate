import PropTypes from 'prop-types';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {
  Card,
  Select,
  Table,
  Text,
  Title,
  Loader,
  Center,
  ScrollArea,
  Stack,
  Alert,
} from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

function MostVisitedUnitsCard({ weeks }) {
  const [selectedWeek, setSelectedWeek] = useState(weeks[0] || 'This Week');
  const [visits, setVisits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchVisits(selectedWeek);
  }, [selectedWeek]);

  const fetchVisits = async (week) => {
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(`/api/visits?week=${encodeURIComponent(week)}`);
      setVisits(response.data);
    } catch (err) {
      setError('Failed to load visit data.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleWeekChange = (value) => {
    setSelectedWeek(value);
  };

  const topThree = visits.slice(0, 3);

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Stack spacing="xs">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Title order={4}>Most Visited Units</Title>
          <Select
            data={weeks}
            value={selectedWeek}
            onChange={handleWeekChange}
            size="xs"
            w={150}
            withinPortal
          />
        </div>

        {loading ? (
          <Center>
            <Loader size="sm" color="blue" />
          </Center>
        ) : error ? (
          <Alert icon={<IconAlertCircle size={16} />} title="Error" color="red" radius="sm">
            {error}
          </Alert>
        ) : (
          <ScrollArea type="auto">
            <Table striped withBorder highlightOnHover verticalSpacing="sm">
              <thead>
                <tr>
                  <th>Unit</th>
                  <th>Resident</th>
                  <th>Visits</th>
                  <th>Last Visit</th>
                  <th>Frequent Visitor</th>
                </tr>
              </thead>
              <tbody>
                {topThree.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.unitName}</td>
                    <td>{entry.residentName}</td>
                    <td>{entry.visitCount}</td>
                    <td>{entry.lastVisit}</td>
                    <td>{formatVisitorName(entry.frequentVisitor)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </ScrollArea>
        )}
      </Stack>
    </Card>
  );
}

function formatVisitorName(name) {
  if (name.length > 15) {
    const [first, ...rest] = name.split(' ');
    const last = rest.pop() || '';
    return `${first} ${last.charAt(0)}.`;
  }
  return name;
}

MostVisitedUnitsCard.propTypes = {
  weeks: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MostVisitedUnitsCard;
