const CategoryPage = ({ params }) => {
  return (
    <div className='bg-slate-50 h-screen'>
      <div className='flex'>
        <div className='w-3/4'>
          <h1 className='text-4xl font-bold text-center mt-4'>{params.category.charAt(0).toUpperCase() + params.category.slice(1)}</h1>
        </div>
        <div className='w-1/4'>
          <div className='mt-16'>
            List
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
