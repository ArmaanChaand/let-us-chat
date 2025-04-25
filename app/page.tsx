import FetchNotes from "@/components/fetch-notes";

export default function Home() {



  return (
    <div className="w-full px-8">
      <FetchNotes />

    </div>
  );
}

/*
There is a 'div' element which has className set as 'grid and 7 columns".
Inside this there will be numerous amount of 'button' rendered dynamically. 
In each row there will be only three buttons. 
But each 'button' in each row will get one class from these three (col-span-2, col-span-3, col-span-2). Button of each row will do so in random fashion.

How to achive this. Tell me the JS logic of it inside React.



{buttonSpans.map((spanClass, index) => (
  <button key={index} className={`bg-blue-500 text-white py-2 px-4 ${spanClass}`}>
    Button {index + 1}
  </button>
))}
 */