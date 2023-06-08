const loader = () => `
  <div class="load">
    <div class="loader"></div>
  </div>  
`;

const failedLoad = () => `
  <div class="load">
    <h1 class="failed">Please Check Your Internet Connection</h1>
  </div>
`;

export { loader, failedLoad };
