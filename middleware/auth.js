export default function auth({ redirect, route }) {
  const token = localStorage.getItem('token');

  if (!(token && token != null && token !== '') && route.path !== '/login') {
    return redirect('/login');
  }

  return null;
}
