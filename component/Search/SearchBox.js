import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';

const SearchBox = () => {
  const [searchKey, setSearchKey] = useState("");
  const router = useRouter()
  const { params = [] } = router.query

useEffect(() => {
  setSearchKey(params)
}, []);
  return (
    <div className="SearchBox">
      <h5 className="SearchBox_title">Results Of Searching For: {searchKey}</h5>
      <div className="color-primary text-capitalize  my-4 text-center box-search">
        Search…
      </div>
      <form action="">
        <input
          className="search-input mb-4"
          type="text"
          name="key"
          placeholder="Search…"
          value={params}
        />
      </form>
    </div>
  );
};
export default SearchBox;
