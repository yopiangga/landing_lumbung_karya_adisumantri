import { useUser } from "context/user";
import withProtected from "hoc/withProtected";
import LayoutDashboard from "layouts/dashboard/index";
import Link from "next/link";
import { useState } from "react";
import { FaUpload } from "react-icons/fa";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { addProduct } from "services/product_services";
import Router from "next/router";
import { FiPlus, FiX } from "react-icons/fi";

function DashboardAddProduct() {
  const user = useUser();
  const [product, setProduct] = useState();
  const [file1, setFile1] = useState();
  const [file2, setFile2] = useState();
  const [file3, setFile3] = useState();
  const [imagePreview1, setImagePreview1] = useState(false);
  const [imagePreview2, setImagePreview2] = useState(false);
  const [imagePreview3, setImagePreview3] = useState(false);
  const [ingredients, setIngredients] = useState([{ label: "", value: "" }]);
  const [loading, setLoading] = useState(false);

  const handleImageAsFile = (e) => {
    const file = e.target.files[0];
    var pattern = /image-*/;

    if (file.type.match(pattern)) {
      if (e.target.name == "avatar1") {
        setFile1(e.target.files[0]);
      } else if (e.target.name == "avatar2") {
        setFile2(e.target.files[0]);
      } else if (e.target.name == "avatar3") {
        setFile3(e.target.files[0]);
      }

      const reader = new FileReader();
      reader.onloadend = () => {
        if (e.target.name == "avatar1") {
          setImagePreview1(reader.result);
        } else if (e.target.name == "avatar2") {
          setImagePreview2(reader.result);
        } else if (e.target.name == "avatar3") {
          setImagePreview3(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);

      return;
    }
  };

  const handleChange = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);

    if (
      product?.name == "" ||
      product?.description == "" ||
      product?.cta == "" ||
      product?.packaging == "" ||
      ingredients.length == 0 ||
      file1 == null ||
      file2 == null ||
      file3 == null
    ) {
      setLoading(false);
    } else {
      // console.log(product);
      Push();
    }
  };

  function Push() {
    const date = new Date();
    const time = date.getTime();
    const storage = getStorage();
    const storageRef1 = ref(storage, `/products/${time}_${file1.name}`);
    const storageRef2 = ref(storage, `/products/${time}_${file2.name}`);
    const storageRef3 = ref(storage, `/products/${time}_${file3.name}`);

    uploadBytes(storageRef1, file1).then((snapshot) => {
      getDownloadURL(storageRef1)
        .then((url1) => {
          uploadBytes(storageRef2, file2).then((snapshot) => {
            getDownloadURL(storageRef2)
              .then((url2) => {
                uploadBytes(storageRef3, file3).then((snapshot) => {
                  getDownloadURL(storageRef3)
                    .then((url3) => {
                      addProduct(
                        product?.name,
                        product?.description,
                        [url1, url2, url3],
                        ingredients,
                        product?.cta,
                        product?.packaging
                      )
                        .then((res) => {
                          setLoading(false);
                          Router.push("/dashboard");
                        })
                        .catch((err) => {
                          setLoading(false);
                          console.log(err);
                        });
                    })
                    .catch((error) => {
                      console.log(error);
                    });
                });
              })
              .catch((error) => {
                console.log(error);
              });
          });
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  return (
    <LayoutDashboard menuActive="2" title="Tambah Produk">
      <div className="overflow-auto h-screen pb-24 px-4 md:px-6">
        <div className="my-6 w-full space-y-4 md:space-x-4 md:space-y-0 flex-col md:flex-row">
          <div className="mb-6"></div>
          <section className="bg-gray-100">
            <div className="max-w-screen-xl px-4  mx-auto sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-4">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <label
                      htmlFor="name"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Nama Produk
                    </label>
                    <div>
                      <input
                        className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                        placeholder="Nama Produk"
                        type="text"
                        name="name"
                        id="name"
                        onChange={handleChange}
                        value={product?.name}
                      />
                    </div>

                    <label
                      htmlFor="description"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Deskripsi Barang
                    </label>
                    <div>
                      <textarea
                        className="w-full p-3 text-sm textarea textarea-bordered h-48 border-gray-200 rounded-lg"
                        placeholder="Deskripsi Barang"
                        rows="8"
                        id="description"
                        name="description"
                        onChange={handleChange}
                        value={product?.description}
                      ></textarea>
                    </div>

                    <label
                      htmlFor="cta"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      CTA
                    </label>
                    <div>
                      <input
                        className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                        placeholder="Virgin Coconut Oil"
                        type="text"
                        name="cta"
                        id="cta"
                        onChange={handleChange}
                        value={product?.cta}
                      />
                    </div>

                    <label
                      htmlFor="packaging"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Packaging
                    </label>
                    <div>
                      <input
                        className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                        placeholder="20 Litre/jerry can or according to customer’s request"
                        type="text"
                        name="packaging"
                        id="packaging"
                        onChange={handleChange}
                        value={product?.packaging}
                      />
                    </div>

                    <label
                      htmlFor="image"
                      className="block mt-2 text-xs font-semibold text-gray-600 uppercase"
                    >
                      Gambar
                    </label>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="flex flex-col">
                        <div className="relative h-32">
                          <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                            <FaUpload />
                            <p className="ml-2 mt-2 text-center break-all">
                              {file1 == null ||
                              file1 == undefined ||
                              file1 == ""
                                ? "Upload Image"
                                : file1.name}
                            </p>
                          </div>
                          <input
                            className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                            type="file"
                            id="avatar1"
                            name="avatar1"
                            onChange={handleImageAsFile}
                            accept="image/png, image/jpeg"
                          />
                        </div>
                        {imagePreview1 ? (
                          <div className="w-full relative overflow-hidden mt-5">
                            <img
                              src={imagePreview1}
                              layout="fill"
                              alt="image-preview"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="relative h-32">
                          <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                            <FaUpload />
                            <p className="ml-2 mt-2 text-center break-all">
                              {file2 == null ||
                              file2 == undefined ||
                              file2 == ""
                                ? "Upload Image"
                                : file2.name}
                            </p>
                          </div>
                          <input
                            className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                            type="file"
                            id="avatar2"
                            name="avatar2"
                            onChange={handleImageAsFile}
                            accept="image/png, image/jpeg"
                          />
                        </div>
                        {imagePreview2 ? (
                          <div className="w-full relative overflow-hidden mt-5">
                            <img
                              src={imagePreview2}
                              layout="fill"
                              alt="image-preview"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                      <div className="flex flex-col">
                        <div className="relative h-32">
                          <div className="border-2 border-dashed border-dark border-opacity-90 text-dark font-bold w-full h-32 rounded-xl flex flex-col justify-center items-center absolute z-0">
                            <FaUpload />
                            <p className="ml-2 mt-2 text-center break-all">
                              {file3 == null ||
                              file3 == undefined ||
                              file3 == ""
                                ? "Upload Image"
                                : file3.name}
                            </p>
                          </div>
                          <input
                            className="cursor-pointer w-full h-40 opacity-0 pin-r pin-t absolute z-10"
                            type="file"
                            id="avatar3"
                            name="avatar3"
                            onChange={handleImageAsFile}
                            accept="image/png, image/jpeg"
                          />
                        </div>
                        {imagePreview3 ? (
                          <div className="w-full relative overflow-hidden mt-5">
                            <img
                              src={imagePreview3}
                              layout="fill"
                              alt="image-preview"
                            />
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>

                    {ingredients.map((el, idx) => {
                      return (
                        <div key={idx} className="">
                          <div className="flex gap-4">
                            <div className="w-28">
                              <label
                                htmlFor="label"
                                className="block my-2 text-xs font-semibold text-gray-600 uppercase"
                              >
                                Label
                              </label>
                              <div>
                                <input
                                  className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                                  placeholder="Grade"
                                  type="text"
                                  id="label"
                                  name="label"
                                  onChange={(e) => {
                                    ingredients[idx].label = e.target.value;
                                  }}
                                />
                              </div>
                            </div>

                            <div className="grow">
                              <label
                                htmlFor="value"
                                className="block my-2 text-xs font-semibold text-gray-600 uppercase"
                              >
                                Value
                              </label>
                              <div>
                                <input
                                  className="w-full p-3 text-sm input input-bordered border-gray-200 rounded-lg"
                                  placeholder="Regular and Edible "
                                  type="text"
                                  id="value"
                                  name="value"
                                  onChange={(e) => {
                                    ingredients[idx].value = e.target.value;
                                  }}
                                />
                              </div>
                            </div>
                            <div className=" flex justify-center items-center">
                              <button
                                className="rounded-lg"
                                type="button"
                                onClick={() => {
                                  ingredients.splice(idx, 1);
                                  setIngredients([...ingredients]);
                                }}
                              >
                                <FiX size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}

                    <div className="flex justify-center">
                      <div
                        className="p-4 rounded-full border-2 cursor-pointer"
                        onClick={() => {
                          setIngredients([
                            ...ingredients,
                            { label: "", value: "" },
                          ]);
                        }}
                      >
                        <FiPlus />
                      </div>
                    </div>

                    <div className="mt-10">
                      {loading ? (
                        <h4>Loading ....</h4>
                      ) : (
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                        >
                          <span className="font-medium">
                            {" "}
                            Tambahkan Produk{" "}
                          </span>

                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-5 h-5 ml-3"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </LayoutDashboard>
  );
}

// export default withProtected(Dashboard);
export default DashboardAddProduct;
