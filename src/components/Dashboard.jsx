import { ApiClient } from 'admin-bro'
import { Box, Header } from '@admin-bro/design-system'
// import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom'

// const api = new ApiClient()

// const sdk = new ChartsEmbedSDK({
//   baseUrl: 'https://charts.mongodb.com/charts-charts-fixture-tenant-zdvkh',
// });
// const chart = sdk.createChart({
//   chartId: '48043c78-f1d9-42ab-a2e1-f2d3c088f864',
// });

//  // render the chart into a container
// chart
// .render(document.getElementById('chart'))
// .catch(() => window.alert('Chart failed to initialise'));

// // refresh the chart whenenver #refreshButton is clicked
// // document
// // .getElementById('refreshButton')
// // .addEventListener('click', () => chart.refresh());

const Dashboard = () => {
 
  return (
    <Box variant="grey">
      <Header.H2>Admin Dashboard</Header.H2>

      <Box variant="white">
      </Box>
      <Box>
      <iframe 
        style={{background: "#FFFFFF", border: "none",borderRadius: "2px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"1024px"} height={"768px"} 
        src={"https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=5c54fd52-95ea-4288-b2c7-3ffb4c5740ae&theme=light"}>
      </iframe>
      </Box>
    </Box>
    
  )
}



export default Dashboard
