import { useGlobalContext } from '../helpers/context';

const Buttons = () => {
  const { isLoading, page, nbPages, handlePage } = useGlobalContext();

  return (
    <div className='btn-container'>
      <button
        type='button'
        disabled={isLoading}
        onClick={() => handlePage('dec')}>
        Prev
      </button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button
        type='button'
        disabled={isLoading}
        onClick={() => handlePage('inc')}>
        Next
      </button>
    </div>
  );
};

export default Buttons;
