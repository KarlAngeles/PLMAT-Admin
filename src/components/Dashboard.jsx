import { ApiClient } from 'admin-bro'
import { Box, Header } from '@admin-bro/design-system'

const api = new ApiClient()

const Dashboard = () => {

  return (
    <Box variant="grey">
      <Header.H2>Admin Dashboard</Header.H2>
      <Box variant="white">
      </Box>
    </Box>
  )
}

export default Dashboard
