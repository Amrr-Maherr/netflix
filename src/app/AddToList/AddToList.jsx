export default function AddToList({buttonText,onclick}) {
    return (
      <>
        <button onClick={onclick} className="bg-gray-700 cursor-pointer hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </>
    );
}