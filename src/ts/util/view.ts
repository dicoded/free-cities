import routes from '@routes/routes';

export default function getView(name: string) {
  return routes.get(name);
}
