import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import ImageCard from "./components/ImageCard.jsx";
import ImageSearch from "./components/ImageSearch.jsx";

function App() {
  const [images, setImages] = useState([]); // 이미지 배열(서버에서 받아옴)
  const [isLoading, setIsLoding] = useState(true); // 로딩상태
  const [term, setTerm] = useState("busan"); // 검색어

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${
        import.meta.env.VITE_PIXABAY_API_KEY
      }&q=${term}&image_type=photo`
    )
      .then((res) => res.json())
      .then((data) => setImages(data.hits))
      .catch((err) => console.log(err));
  }, [term]);
  return (
    <div className="container mx-auto my-7">
      <div>
        <ImageSearch setTerm={setTerm} />
      </div>
      <div className="grid place-items-center sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7">
        {images.map((image) => (
          <ImageCard key={image.id} image={image} />
        ))}
      </div>
    </div>
  );
}

export default App;
