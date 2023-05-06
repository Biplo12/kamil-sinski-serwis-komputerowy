import axios from 'axios';

const getAccessToken = async () => {
  const response = await axios.get(
    `https://graph.facebook.com/v14.0/oauth/access_token?client_id=${process.env.FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&grant_type=client_credentials`
  );

  return response.data.access_token;
};

export default getAccessToken;
