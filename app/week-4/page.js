import NewItem from '../components/NewItem';

const Page = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Add New Item</h1>
      <NewItem />
    </div>
  );
};

export default Page;