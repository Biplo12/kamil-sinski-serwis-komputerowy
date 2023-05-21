import axios from 'axios';

jest.mock('axios', () => ({
  post: jest.fn(),
  get: jest.fn(),
}));

describe('SendMail', () => {
  it('should send email', async () => {
    const mockedAxios = axios as jest.Mocked<typeof axios>;
    mockedAxios.post.mockResolvedValue({
      status: 200,
      data: {
        statusCode: 200,
        message: 'Success',
      },
    });

    const response = await axios.post('/api/sendMail', {
      name: 'Test',
      email: 'test@gmail.com',
      message: 'Test message',
      subject: 'Test subject',
    });
    expect(response.status).toBe(200);
    expect(response.data.message).toBe({
      statusCode: 200,
      message: 'Success',
    });
  });
});
