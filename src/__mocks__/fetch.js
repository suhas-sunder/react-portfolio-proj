const mockResponse = true;
  
  const response = {
    post: jest.fn().mockResolvedValue(mockResponse),
  };
  
  export default response;