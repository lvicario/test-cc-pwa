import { handleCallback } from '@auth0/nextjs-auth0';

export default handleCallback(async (req, res, session) => {
  console.log(session);
  const { email } = session.user;

  // Validate the user's email against your PHP backend
  const response = await fetch('http://your-php-backend-url/validate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${session.idToken}`,
    },
    body: JSON.stringify({ email }),
  });

  if (!response.ok) {
    // Handle the case where validation fails
    return res.redirect('/api/auth/logout');
  }

  return session;
});
