import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import "./index.css";
import RetrieveStudentForm from "./components/retrivestudentloginform/retrivestudentloginform";
import Studentloginform from "./components/studentloginform/studentloginform";
import RetrieveBatchLoginForm from "./components/retrivebatchloginmanagement/RetrievebatchForm";
import TutorRetrieveForm from "./components/retrivetutorloginform/TutorRetrieveForm";
import Tutorinsform from "./components/tutorloginfrom/Tutorinsform";
import BatchLoginForm from "./components/batchloginmanagement/batchform";
import Loginform from "./components/Loginform/Loginform";

function App() {
  return (
    <Router>
      <div className="App">
        <header class="flex flex-wrap  md:justify-start md:flex-nowrap z-50 w-full bg-white border-b border-gray-200">
          <nav class="relative max-w-[85rem] w-full mx-auto flex items-center justify-between gap-3 py-2 px-4 sm:px-6 lg:px-8">
            <a
              className="flex-none font-semibold text-xl text-black focus:outline-none focus:opacity-80 no-underline"
              aria-label="Cloud4coolKids"
            >
              <img
                class="w-full size-8 object-cover"
                src="https://cloud4coolkids.com/assets/admin_image/image/20240513194409.png"
                alt="Gallery Image"
              />
            </a>

            <div class="md:order-3 flex justify-end items-center gap-x-1">
              <div class="hidden md:inline-block md:me-2">
                <div class="w-px h-4 bg-gray-300"></div>
              </div>
              <Link to="/">
                <a
                  class="bg-primary text-white m-1 no-underline py-2 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200  text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700"
                  href="#"
                >
                  Login
                </a>
              </Link>
              <button
                type="button"
                data-bs-toggle="offcanvas"
                href="#offcanvasExample"
                role="button"
                aria-controls="offcanvasExample"
                class="relative size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                aria-haspopup="dialog"
                aria-expanded="false"
                aria-label="Toggle navigation"
                data-hs-overlay="#hs-header-base-offcanvas"
              >
                <svg
                  class="shrink-0 size-4 ms-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>

                <span class="sr-only">Toggle navigation</span>
              </button>
            </div>

            <div
              id="hs-header-base"
              class="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[60] bg-white border-e basis-full grow md:order-2 md:static md:block md:h-auto md:max-w-none md:w-auto md:border-e-transparent md:transition-none md:translate-x-0 md:z-40 md:basis-auto md: hidden "
              role="dialog"
              tabindex="-1"
              aria-label="Sidebar"
              data-hs-overlay-close-on-resize
            >
              <div class="overflow-hidden overflow-y-auto max-h-[75vh] [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                <div class="py-2 md:py-0 px-2 md:px-0 flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                  <div class="md:hidden p-2 flex justify-between items-center">
                    <h3
                      id="hs-header-base-label"
                      class="font-bold text-gray-800"
                    >
                      Menu title
                    </h3>
                    <button
                      type="button"
                      class="size-8 inline-flex justify-center items-center gap-x-2 rounded-full border border-transparent bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-none focus:bg-gray-200 disabled:opacity-50 disabled:pointer-events-none"
                      aria-label="Close"
                      data-hs-overlay="#hs-header-base"
                    >
                      <span class="sr-only">Close</span>
                      <svg
                        class="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M18 6 6 18" />
                        <path d="m6 6 12 12" />
                      </svg>
                    </button>
                  </div>
                  <div class="grow">
                    <div class="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                      <Link
                        className="nav-link text-light"
                        to="/studentloginform"
                      >
                        <a
                          class="p-2 flex  no-underline items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                          Student Login
                        </a>
                      </Link>

                      <Link
                        className="nav-link text-light"
                        to="/retrievestudent"
                      >
                        <a
                          class="p-2 flex  no-underline items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          Retrieve Student Login
                        </a>
                      </Link>

                      <Link className="nav-link text-light" to="/batchlogin">
                        <a
                          class="p-2 flex  no-underline items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
                            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                          Batch Login
                        </a>
                      </Link>

                      <Link className="nav-link text-light" to="/retrievebatch">
                        <a
                          class="p-2 flex  no-underline items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          Retrieve Batch Login
                        </a>
                      </Link>

                      <Link
                        className="nav-link text-light"
                        to="/tutorloginform"
                      >
                        <a
                          class="p-2 flex  no-underline items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M12 12h.01" />
                            <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                            <path d="M22 13a18.15 18.15 0 0 1-20 0" />
                            <rect width="20" height="14" x="2" y="6" rx="2" />
                          </svg>
                          Tutor Login
                        </a>
                      </Link>

                      <Link
                        className="nav-link text-light"
                        to="/retrievetutorform"
                      >
                        <a
                          class="p-2 flex  no-underline items-center text-sm text-gray-800 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
                          href="#"
                        >
                          <svg
                            class="shrink-0 size-4 me-3 md:me-2 block md:hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          >
                            <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                            <path d="M18 14h-8" />
                            <path d="M15 18h-5" />
                            <path d="M10 6h8v4h-8V6Z" />
                          </svg>
                          Retrieve Tutor Login
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <div
          className="offcanvas offcanvas-start text-bg-dark"
          tabIndex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div className="offcanvas-header border-bottom border-light">
            <h5
              className="offcanvas-title text-light"
              id="offcanvasNavbarLabel"
            >
              Student
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 custom-margin">
              <li 
              data-bs-dismiss="offcanvas"
              aria-label="Close" 
              className="nav-item">
                <Link
                  className="nav-link active text-light"
                  to="/Studentloginform"
                  
                >
                  Student Login
                </Link>
              </li>
              <li 
              data-bs-dismiss="offcanvas"
              aria-label="Close"  className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/retrievestudent"
                >
                  Retrieve Student Login
                </Link>
              </li>
              <li 
              data-bs-dismiss="offcanvas"
              aria-label="Close"  className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/batchlogin"
                >
                  Batch Login
                </Link>
              </li>
              <li 
              data-bs-dismiss="offcanvas"
              aria-label="Close"  className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/retrievebatch"
                >
                  Retrieve Batch Login
                </Link>
              </li>
              <li 
              data-bs-dismiss="offcanvas"
              aria-label="Close"  className="nav-item">
                <Link
                  className="nav-link text-light"
                  to="/tutorloginform"
                >
                  Tutor Login
                </Link>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas"
                  aria-label="Close">
                <Link
                  className="nav-link text-light"
                  
                  to="/retrievetutorform"
                >
                  Retrieve Tutor Login
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <section>
          <Routes>
            <Route path="/" element={<Loginform />} />
            <Route path="/studentloginform" element={<Studentloginform />} />
            <Route path="/retrievestudent" element={<RetrieveStudentForm />} />
            <Route path="/batchlogin" element={<BatchLoginForm />} />
            <Route path="/retrievebatch" element={<RetrieveBatchLoginForm />} />
            <Route path="/tutorloginform" element={<Tutorinsform />} />
            <Route path="/retrievetutorform" element={<TutorRetrieveForm />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
