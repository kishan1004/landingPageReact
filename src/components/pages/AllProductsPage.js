import React, { useState } from "react";
import Product2img from "../../images/imgproduct2.jpeg";
import Product4img from "../../images/imgproduct4.jpeg";
import Product5img from "../../images/imgproduct5.jpeg";
import Product6img from "../../images/imgproduct6.jpeg";
import PageLogo from "../../images/starringblack.png";
import { Link } from "react-router-dom";

const AllProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);

  const [availabilityFilters, setAvailabilityFilters] = useState({
    available: false,
    outOfStock: false,
  });

  const handleAvailabilityChange = (e) => {
    const { name, checked } = e.target;
    setAvailabilityFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
  };

  const [selectedSize, setSelectedSize] = useState(null);
  const sizes = ["XS", "S", "M", "L", "XL", "2X"];

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(5000);
  const [isOpen, setIsOpen] = useState(false);

  const handleMinPriceChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxPriceChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [selectedRatings, setSelectedRatings] = useState([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleRatingSelect = (rating) => {
    setSelectedRatings((prevSelectedRatings) =>
      prevSelectedRatings.includes(rating)
        ? prevSelectedRatings.filter((r) => r !== rating)
        : [...prevSelectedRatings, rating]
    );
  };

  const toggleDropdown2 = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [isColorDropdownOpen, setIsColorDropdownOpen] = useState(false);
  const [selectedColors, setSelectedColors] = useState([]);

  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Black",
    "White",
    "Pink",
    "Brown",
    "Orange",
  ];

  const handleColorSelect = (color) => {
    setSelectedColors((prevSelectedColors) =>
      prevSelectedColors.includes(color)
        ? prevSelectedColors.filter((c) => c !== color)
        : [...prevSelectedColors, color]
    );
  };

  const [isCategoryDropdownOpen, setIsCategoryDropdownOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    "SHIRT",
    "SHORTS",
    "SUITS",
    "T-SHIRTS",
    "JEANS",
    "JACKETS",
    "COATS",
  ];

  const handleCategoryToggle = (category) => {
    setSelectedCategories(
      (prevCategories) =>
        prevCategories.includes(category)
          ? prevCategories.filter((item) => item !== category) // Remove if already selected
          : [...prevCategories, category] // Add if not selected
    );
  };

  const [isTagDropdownOpen, setIsTagDropdownOpen] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = ["Top Rated", "Best Seller", "New Trend", "Classic"];

  const handleTagToggle = (tag) => {
    setSelectedTags(
      (prevTags) =>
        prevTags.includes(tag)
          ? prevTags.filter((item) => item !== tag) // Remove if already selected
          : [...prevTags, tag] // Add if not selected
    );
  };

  const [isCollectionDropdownOpen, setIsCollectionDropdownOpen] =
    useState(false);
  const [selectedCollections, setSelectedCollections] = useState([]);

  const collections = [
    "Summer",
    "Winter",
    "Festival",
    "Beach",
    "Trekking",
    "Sports",
    "Coords",
  ];

  const handleCollectionToggle = (collection) => {
    setSelectedCollections((prevCollections) =>
      prevCollections.includes(collection)
        ? prevCollections.filter((item) => item !== collection)
        : [...prevCollections, collection]
    );
  };

  const handleClearAll = () => {
    setAvailabilityFilters({ available: false, outOfStock: false });
    setSelectedSize(null);
    setMinPrice(0);
    setMaxPrice(5000);
    setSelectedRatings([]);
    setSelectedColors([]);
    setSelectedCategories([]);
    setSelectedTags([]);
    setSelectedCollections([]);
  };

  const handleApply = () => {
    console.log("Filters applied:", {
      availability: availabilityFilters,
      selectedSize,
      minPrice,
      maxPrice,
      selectedRatings,
      selectedColors,
      selectedCategories,
      selectedTags,
      selectedCollections,
    });
  };

  const [selectedFilter, setSelectedFilter] = useState("ALL");
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    {
      id: 1,
      type: "SHIRT",
      name: "Cool Shirt",
      image: Product2img,
      price: 199,
      availability: "available",
      sizes: ["S", "M", "L"],
      ratings: [4, 5],
      colors: ["Blue", "Red"],
      tags: ["Top Rated", "New Trend"],
      collections: ["Summer", "Beach"],
    },
    {
      id: 2,
      type: "SHORTS",
      name: "Summer Shorts",
      image: Product4img,
      price: 99,
      availability: "available",
      sizes: ["M", "L"],
      ratings: [3, 4],
      colors: ["Yellow"],
      tags: ["Best Seller"],
      collections: ["Summer"],
    },
    {
      id: 3,
      type: "SUITS",
      name: "Formal Suit",
      image: Product5img,
      price: 399,
      availability: "outOfStock",
      sizes: ["M", "L", "XL"],
      ratings: [5],
      colors: ["Black"],
      tags: ["Classic"],
      collections: ["Winter"],
    },
    {
      id: 4,
      type: "T-SHIRTS",
      name: "Graphic Tee",
      image: Product6img,
      price: 49,
      availability: "available",
      sizes: ["XS", "S"],
      ratings: [4],
      colors: ["White"],
      tags: ["New Trend"],
      collections: ["Festival"],
    },
    {
      id: 5,
      type: "JEANS",
      name: "Blue Jeans",
      image: Product2img,
      price: 149,
      availability: "available",
      sizes: ["M", "L", "XL"],
      ratings: [3, 4],
      colors: ["Blue"],
      tags: ["Top Rated"],
      collections: ["Trekking"],
    },
    {
      id: 6,
      type: "JACKETS",
      name: "Winter Jacket",
      image: Product4img,
      price: 249,
      availability: "available",
      sizes: ["L", "XL"],
      ratings: [5],
      colors: ["Black"],
      tags: ["Classic"],
      collections: ["Winter"],
    },
    {
      id: 7,
      type: "COATS",
      name: "Classic Coat",
      image: Product5img,
      price: 299,
      availability: "available",
      sizes: ["M", "L"],
      ratings: [4, 5],
      colors: ["Brown"],
      tags: ["Top Rated"],
      collections: ["Winter"],
    },
    {
      id: 8,
      type: "NEW",
      name: "New Arrival",
      image: Product6img,
      price: 199,
      availability: "available",
      sizes: ["S", "M"],
      ratings: [4],
      colors: ["Pink"],
      tags: ["New Trend"],
      collections: ["Festival"],
    },
  ];

  const filters = [
    "ALL",
    "NEW",
    "SHIRT",
    "SHORTS",
    "SUITS",
    "T-SHIRTS",
    "JEANS",
    "JACKETS",
    "COATS",
  ];

  const filteredItems = items.filter((item) => {
    const matchesFilter =
      selectedFilter === "ALL" || item.type === selectedFilter;
    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setSelectedFilter("ALL"); // Automatically set filter to "ALL" when typing in search
  };

  return (
    <>
      <header className="p-4 lg:p-10 flex justify-between items-center  bg-gray-100">
        <button onClick={toggleMenu} className="md:hidden">
          <svg
            width="28"
            height="18"
            viewBox="0 0 28 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 1L1 1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M19 9L1 9"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
            <path
              d="M14 17H1"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <div className="flex items-center space-x-4 md:space-x-8">
          <nav className="hidden md:flex space-x-4 md:space-x-8 font-medium text-sm">
            <a
              href="https://famous-zabaione-ada841.netlify.app/"
              className="text-gray-600 hover:text-black"
            >
              Home
            </a>
            <a href="/" className="text-gray-600 hover:text-black">
              Collections
            </a>
            <a href="/" className="text-gray-600 hover:text-black">
              New
            </a>
          </nav>
        </div>

        <div>
          <img
            src={PageLogo}
            alt="logoimage"
            className="md:max-w-[200px] max-w-[100px]"
          />
        </div>

        <div className="flex space-x-2 md:space-x-8 items-center">
          <Link to="/Favourites">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25" cy="25" r="25" fill="black" />
              <path
                d="M27.8059 30.6955L27.7597 29.9469L27.8059 30.6955ZM22.3327 20.8256L22.2762 21.5735C22.4795 21.5888 22.6803 21.5207 22.8323 21.3849C22.9844 21.2491 23.0746 21.0572 23.0822 20.8535L22.3327 20.8256ZM31.5254 27.3727L32.264 27.5027L31.5254 27.3727ZM27.7597 29.9469C26.1685 30.045 24.5344 30.2352 22.9356 30.0497C21.3752 29.8687 19.933 29.3338 18.7594 28.02L17.6408 29.0193C19.1263 30.6822 20.9523 31.3297 22.7627 31.5398C24.5347 31.7453 26.3739 31.5352 27.852 31.4441L27.7597 29.9469ZM18.7594 28.02C17.6168 26.741 17.3858 25.028 17.9646 23.7069C18.5225 22.4335 19.8968 21.3937 22.2762 21.5735L22.3892 20.0777C19.4577 19.8563 17.4361 21.1753 16.5907 23.105C15.7661 24.9871 16.1242 27.3217 17.6408 29.0193L18.7594 28.02ZM27.852 31.4441C28.3848 31.4112 28.9662 31.3738 29.4961 31.2662C30.0257 31.1587 30.5862 30.9664 31.0342 30.5662L30.0349 29.4475C29.8709 29.5941 29.6086 29.7128 29.1976 29.7962C28.7869 29.8796 28.3101 29.913 27.7597 29.9469L27.852 31.4441ZM32.264 27.5027C32.5206 26.0441 32.936 24.2402 32.9307 22.4563C32.9254 20.6338 32.4871 18.7466 31.0016 17.0837L29.8829 18.083C31.0566 19.3968 31.4261 20.8899 31.4307 22.4607C31.4355 24.0703 31.0629 25.6727 30.7867 27.2428L32.264 27.5027ZM31.0016 17.0837C29.4851 15.3861 27.2054 14.768 25.2426 15.3759C23.2301 15.9993 21.6924 17.86 21.5832 20.7977L23.0822 20.8535C23.1708 18.4689 24.3584 17.2201 25.6864 16.8088C27.0641 16.382 28.7403 16.8039 29.8829 18.083L31.0016 17.0837ZM30.7867 27.2428C30.6912 27.7858 30.6044 28.256 30.4754 28.6547C30.3464 29.0537 30.199 29.3009 30.0349 29.4475L31.0342 30.5662C31.4823 30.1659 31.7363 29.6305 31.9026 29.1163C32.069 28.6019 32.1716 28.0284 32.264 27.5027L30.7867 27.2428Z"
                fill="white"
              />
            </svg>
          </Link>
          <div className="flex">
            <button className="bg-black text-white px-4 md:px-5 py-2 rounded-full hover:text-gray-400 font-medium text-sm hidden md:block">
              Cart
            </button>
            <button>
              <svg
                width="51"
                height="50"
                viewBox="0 0 51 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="25.6665" cy="25" r="25" fill="black" />
                <circle cx="25.6665" cy="24.999" r="18.5185" fill="white" />
                <path
                  d="M19.5829 30.8256C20.515 32 22.25 32 25.7198 32H26.2802C29.75 32 31.485 32 32.4171 30.8256M19.5829 30.8256C18.6507 29.6511 18.9704 27.8681 19.6099 24.3021C20.0646 21.7662 20.292 20.4982 21.1552 19.7491M19.5829 30.8256C19.5829 30.8256 19.5829 30.8256 19.5829 30.8256ZM32.4171 30.8256C33.3493 29.6511 33.0296 27.8681 32.3901 24.3021C31.9354 21.7662 31.708 20.4982 30.8448 19.7491M32.4171 30.8256C32.4171 30.8256 32.4171 30.8256 32.4171 30.8256ZM30.8448 19.7491C29.9816 19 28.7478 19 26.2802 19H25.7198C23.2522 19 22.0184 19 21.1552 19.7491M30.8448 19.7491C30.8448 19.7491 30.8448 19.7491 30.8448 19.7491ZM21.1552 19.7491C21.1552 19.7491 21.1552 19.7491 21.1552 19.7491Z"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M24 22C24.2911 23.1652 25.0766 24 26 24C26.9234 24 27.7089 23.1652 28 22"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <button>
            <svg
              width="51"
              height="50"
              viewBox="0 0 51 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="25.2593" cy="25" r="25" fill="black" />
              <circle
                cx="25.0001"
                cy="22.4286"
                r="3.42857"
                stroke="white"
                strokeWidth="1.5"
              />
              <path
                d="M31 31.8583C31 29.9647 28.3137 28.4297 25 28.4297C21.6863 28.4297 19 29.9647 19 31.8583"
                stroke="white"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
            <nav className="flex flex-col items-center space-y-4 p-4">
              <a
                href="https://famous-zabaione-ada841.netlify.app/"
                className="text-gray-600 hover:text-black"
              >
                Home
              </a>
              <a href="/" className="text-gray-600 hover:text-black">
                Collections
              </a>
              <a href="/" className="text-gray-600 hover:text-black">
                New
              </a>
            </nav>
          </div>
        )}
      </header>

      <div className="lg:flex">
        <div>
          <div
            className="lg:hidden flex justify-between items-center p-4  bg-gray-100"
            onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          >
            <h3 className="text-xl font-bold">Filters</h3>
            <button onClick={() => setIsSidebarVisible(!isSidebarVisible)}>
              <svg
                width="28"
                height="18"
                viewBox="0 0 28 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M27 1L1 1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M19 9L1 9"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M14 17H1"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>

          <aside
            className={`${
              isSidebarVisible ? "block" : "hidden"
            } lg:block pt-4 px-5  bg-gray-100 z-50 absolute top-0 left-0 h-full lg:relative`}
          >
            <h3 className="text-xl font-bold mb-4">Filters</h3>

            <div className="mb-4">
              <h4 className="font-semibold mb-2">Size</h4>
              <div className="flex space-x-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => handleSizeSelect(size)}
                    className={`border w-10 h-10 font-medium text-sm ${
                      selectedSize === size
                        ? "border-gray-900 text-gray-900 bg-gray-300"
                        : "border-gray-500 text-gray-600 hover:bg-gray-300"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
              {selectedSize && (
                <p className="mt-2 text-sm text-gray-700">
                  Selected size: {selectedSize}
                </p>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="my-4 flex items-center justify-between cursor-pointer"
                onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
              >
                <h4 className="font-bold text-sm">Availability</h4>

                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isAvailabilityOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isAvailabilityOpen && (
                <div className="flex flex-col space-y-4">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="available"
                      checked={availabilityFilters.available}
                      onChange={handleAvailabilityChange}
                      className="mr-2 w-5 h-5"
                    />
                    Available
                    <span className="text-blue-700 ml-5">(450)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="outOfStock"
                      checked={availabilityFilters.outOfStock}
                      onChange={handleAvailabilityChange}
                      className="mr-2 w-5 h-5"
                    />
                    Out of Stock
                    <span className="text-blue-700 ml-5"> (18)</span>
                  </label>
                </div>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="my-4 flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setIsCategoryDropdownOpen(!isCategoryDropdownOpen)
                }
              >
                <h4 className="font-bold text-sm">Category</h4>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isCategoryDropdownOpen ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isCategoryDropdownOpen && (
                <div className="flex flex-col space-y-2 mt-4 pl-4">
                  {categories.map((category) => (
                    <label
                      key={category}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="form-checkbox text-blue-500"
                      />
                      <span
                        className={`text-sm ${
                          selectedCategories.includes(category)
                            ? "font-bold text-blue-500"
                            : "text-gray-700"
                        }`}
                      >
                        {category}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => setIsColorDropdownOpen(!isColorDropdownOpen)}
              >
                <h4 className="font-bold text-sm">Colors</h4>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isColorDropdownOpen ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              {isColorDropdownOpen && (
                <div className="flex flex-col space-y-2 mt-4 pl-4">
                  {colors.map((color) => (
                    <label
                      key={color}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedColors.includes(color)}
                        onChange={() => handleColorSelect(color)}
                        className="form-checkbox h-4 w-4 text-gray-600 border-gray-300 rounded"
                      />
                      <span className="ml-2 text-sm">{color}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleDropdown}
              >
                <h4 className="font-bold text-sm">Price Range</h4>

                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isOpen ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isOpen && (
                <div className="mt-4">
                  <div className="flex space-x-2 mb-4">
                    <input
                      type="number"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      className="w-20 p-2 border border-gray-300 rounded text-center text-sm"
                      min="0"
                      max="5000"
                    />
                    <span className="text-gray-500">-</span>
                    <input
                      type="number"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                      className="w-20 p-2 border border-gray-300 rounded text-center text-sm"
                      min="0"
                      max="5000"
                    />
                  </div>
                  <div className="flex items-center space-x-4">
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={minPrice}
                      onChange={handleMinPriceChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                    <input
                      type="range"
                      min="0"
                      max="5000"
                      value={maxPrice}
                      onChange={handleMaxPriceChange}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <p className="mt-2 text-sm text-gray-700">
                    Selected range: ${minPrice} - ${maxPrice}
                  </p>
                </div>
              )}
            </div>
            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="my-4 flex items-center justify-between cursor-pointer"
                onClick={() =>
                  setIsCollectionDropdownOpen(!isCollectionDropdownOpen)
                }
              >
                <h4 className="font-bold text-sm">Collections</h4>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isCollectionDropdownOpen ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isCollectionDropdownOpen && (
                <div className="flex flex-col space-y-2 mt-4 pl-4">
                  {collections.map((collection) => (
                    <label
                      key={collection}
                      className="flex items-center space-x-2"
                    >
                      <input
                        type="checkbox"
                        checked={selectedCollections.includes(collection)}
                        onChange={() => handleCollectionToggle(collection)}
                        className="form-checkbox text-blue-500"
                      />
                      <span
                        className={`text-sm ${
                          selectedCollections.includes(collection)
                            ? "font-bold text-blue-500"
                            : "text-gray-700"
                        }`}
                      >
                        {collection}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="my-4 flex items-center justify-between cursor-pointer"
                onClick={() => setIsTagDropdownOpen(!isTagDropdownOpen)}
              >
                <h4 className="font-bold text-sm">Tags</h4>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isTagDropdownOpen ? "rotate-90" : ""
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isTagDropdownOpen && (
                <div className="flex flex-col space-y-2 mt-4 pl-4">
                  {tags.map((tag) => (
                    <label key={tag} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        checked={selectedTags.includes(tag)}
                        onChange={() => handleTagToggle(tag)}
                        className="form-checkbox text-blue-500"
                      />
                      <span
                        className={`text-sm ${
                          selectedTags.includes(tag)
                            ? "font-bold text-blue-500"
                            : "text-gray-700"
                        }`}
                      >
                        {tag}
                      </span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="my-4">
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={toggleDropdown2}
              >
                <h4 className="font-bold text-sm">Rating</h4>
                <svg
                  width="7"
                  height="11"
                  viewBox="0 0 7 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`transform transition-transform ${
                    isDropdownOpen ? "rotate-90" : "rotate-0"
                  }`}
                >
                  <path
                    d="M1 10L6 5.5L1 1"
                    stroke="black"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {isDropdownOpen && (
                <div className="flex flex-col space-y-2 mt-4">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <label
                      key={rating}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={selectedRatings.includes(rating)}
                        onChange={() => handleRatingSelect(rating)}
                        className="form-checkbox h-4 w-4 text-yellow-400 border-gray-300 rounded"
                      />
                      <div
                        className={`flex items-center ml-2 ${
                          selectedRatings.includes(rating)
                            ? "text-yellow-400"
                            : "text-gray-400"
                        }`}
                      >
                        {[...Array(rating)].map((_, index) => (
                          <svg
                            key={index}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            className="mr-1"
                          >
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                          </svg>
                        ))}
                        <span className="text-sm">{rating} stars</span>
                      </div>
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div className="border-t border-dotted border-gray-500 w-full my-4"></div>

            <div className="flex space-x-4 mt-6">
              <button
                onClick={handleClearAll}
                className="w-full py-2 bg-black hover:text-[#D9D9D9] text-white font-semibold rounded"
              >
                Clear All
              </button>
              <button
                onClick={handleApply}
                className="w-full py-2 bg-[#D9D9D9] text-black hover:text-white font-semibold rounded"
              >
                Apply
              </button>
            </div>
          </aside>

          {isSidebarVisible && (
            <div
              onClick={() => setIsSidebarVisible(false)}
              className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
            />
          )}
        </div>

        <div className="p-4 w-full overflow-hidden bg-gray-100">
          <p className="text-xs font-medium mb-4">Home / Products</p>
          <h1 className="text-xl font-bold mb-3">PRODUCTS</h1>

          <div className="flex flex-col lg:flex-row lg:space-x-5 space-y-5 lg:space-y-0 items-start">
            {/* Search Input */}
            <div className="relative md:w-1/3 w-full cursor-pointer">
              <svg
                onClick={() => document.getElementById("searchInput").focus()}
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                <circle
                  cx="7.80834"
                  cy="7.80834"
                  r="6.80834"
                  stroke="black"
                  strokeWidth="1.5"
                />
                <path
                  d="M12.825 12.8242L15.3333 15.3326"
                  stroke="black"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <input
                type="text"
                id="searchInput"
                className="w-full pl-10 pr-8 bg-[#D9D9D9] rounded-sm p-2 text-sm text-gray-700 focus:outline-none"
                placeholder="Search"
                value={searchTerm}
                onChange={handleSearchChange}
              />

              {/* Clear (X) button */}
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                >
                  &times;
                </button>
              )}
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap lg:justify-start justify-between gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`border-2 text-gray-600 md:w-28 w-20 p-1 font-medium text-xs ${
                    selectedFilter === filter
                      ? "text-black border-black"
                      : "text-[#D9D9D9]"
                  } hover:text-black`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          {/* Display Filtered Products */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
            {filteredItems.length > 0 ? (
              filteredItems.map(({ id, name, image, price }) => (
                <div key={id} className="border rounded-md p-4 bg-white">
                  <img
                    src={image}
                    alt={name}
                    className="h-80 w-full object-cover"
                  />
                  <div className="flex items-center space-x-1 pt-2">
                    <p className="font-medium text-xs text-gray-600">{name}</p>
                    <div className="h-3 w-3 bg-black"></div>
                    <p className="font-medium text-xs text-gray-600">
                      +
                      {Math.max(
                        ...items.find((item) => item.id === id).ratings
                      )}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <h2 className="font-medium text-sm">
                      <a href="https://stupendous-cranachan-15451e.netlify.app/">
                        {name}
                      </a>
                    </h2>
                    <p className="text-gray-600">${price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No items found for this filter.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductsPage;
