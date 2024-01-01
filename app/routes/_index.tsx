import type { MetaFunction } from '@remix-run/node';

export const meta: MetaFunction = () => {
  return [{ title: 'Abab Trade' }, { name: 'description', content: 'Abab New Trading Experience' }];
};

export default function Index() {
  return <div>Home</div>;
}
