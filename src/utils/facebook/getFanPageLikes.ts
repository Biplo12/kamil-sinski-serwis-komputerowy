import axios from 'axios';

const getFanPageLikes = async (accessToken: string) => {
  const response = await axios.get(
    `https://graph.facebook.com/v14.0/${process.env.FACEBOOK_FANPAGE_URL_ID}?fields=fan_count&access_token=${accessToken}`
  );

  return response.data.fan_count;
};

export default getFanPageLikes;
