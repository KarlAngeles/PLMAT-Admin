import { ApiClient } from 'admin-bro'
import { Box, Header } from '@admin-bro/design-system'
import { Column, Columns } from 'admin-bro'
import React from 'react'
import styled from 'styled-components'

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

      <Box padding ="50px">
      <iframe 
        style={{padding:"20px", background: "#FFFFFF", display: "flex", border: "none", borderRadius: "10px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"520px"} height={"480px"}
        src={"https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=5c54fd52-95ea-4288-b2c7-3ffb4c5740ae&theme=light"}>
      </iframe>
      </Box>
      
      <Box padding ="50px">
      <iframe 
        style={{padding:"20px", background: "#FFFFFF", display: "flex", border: "none",borderRadius: "10px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"520px"} height={"480px"} 
        src="https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=fea02547-eb2c-4b29-ae01-ce0f8b41edd4&theme=light">
      </iframe>
      </Box>

      <Box padding ="50px">
      <iframe 
        style={{padding:"20px", background: "#FFFFFF", display: "flex", border: "none", borderRadius: "10px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"520px"} height={"480px"}
        src="https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=44589cae-b2b7-4b71-a9ac-92cec2174685&theme=light">
      </iframe>
      </Box>

      <Box padding ="50px">
      <iframe 
        style={{padding:"20px", background: "#FFFFFF", display: "flex", border: "none",borderRadius: "10px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"520px"} height={"480px"} 
        src="https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=b56599ea-79b9-4dda-87b0-e082f4b917a5&theme=light">
      </iframe>
      </Box>

      <Box padding ="50px">
      <iframe 
        style={{padding:"20px", background: "#FFFFFF", display: "flex", border: "none", borderRadius: "10px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"520px"} height={"480px"}
        src="https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=61be70a2-3703-43c7-b14e-eace8381f9fd&theme=light">
        </iframe>
      </Box>

      <Box padding ="50px">
      <iframe 
        style={{padding:"20px", background: "#FFFFFF", display: "flex", border: "none",borderRadius: "10px",boxShadow: "0  10px 0 rgba(70, 76, 79, .2)"}} 
        width={"520px"} height={"480px"} 
        src="https://charts.mongodb.com/charts-plm-se2-psuaf/embed/charts?id=6b214dcf-def3-4dd5-87d6-213eabd8e77b&theme=light">
      </iframe>
      </Box>

    </Box>
    
  )
}



export default Dashboard
