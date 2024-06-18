import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar/NavbarComponent";
import Footer from "./components/Footer/FooterComponent";

import Homepage from "./pages/homePage/homepage";
import Donasi from "./pages/donasiPage/donasi";

import Event from "./pages/eventPage/event";
import EventDetail from "./pages/eventPage/eventdetail";

import Blog from "./pages/blogPage/blog";
import BlogDetail from "./pages/blogPage/blogdetail";
// import LoginWithoutHeaderAndFooter from "./components/LoginWithoutHeaderAndFooter";

import Pendidikan from "./pages/kategori/pendidikan";
import Bencana from "./pages/kategori/bencana";
import Kesehatan from "./pages/kategori/kesehatan";
import Sosial from "./pages/kategori/sosial";
import Teknologi from "./pages/kategori/teknologi";

import Zakat from "./pages/campaign/zakat";
import Qurban from "./pages/campaign/qurban";

import Berlangsung from "./pages/status/berlangsung";
import Diperpanjang from "./pages/status/diperpanjang";
import Selesai from "./pages/status/selesai";

import Berakhir from "./pages/diurutkan/berakhir";
import Populer from "./pages/diurutkan/populer";
import Terbaru from "./pages/diurutkan/terbaru";
import Terlama from "./pages/diurutkan/terlama";
import Mendesak from "./pages/diurutkan/mendesak";

import DetailPendidikan from "./pages/detailDonasi/detailPendidikan";
import DetailBencana from "./pages/detailDonasi/detailBencana";
import DetailKesehatan from "./pages/detailDonasi/detailKesehatan";
import DetailSosial from "./pages/detailDonasi/detailSosial";
import DetailTeknologi from "./pages/detailDonasi/detailTeknologi";
import DetailZakat from "./pages/detailDonasi/detailZakat";
import DetailQurban from "./pages/detailDonasi/detailQurban";

import PayDonasiUang from "./pages/paymentDonasi/payDonasiUang"
function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  // const isRegisterPage = location.pathname === "/register";

  return (
    <>
      {!isLoginPage && <Navbar />}
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/donasi" element={<Donasi />} />

        <Route path="/event" element={<Event />} />
        <Route path="/eventdetail" element={<EventDetail />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/blogdetail" element={<BlogDetail />} />
        {/* <Route path="/login" element={<LoginWithoutHeaderAndFooter />} />*/}
        
        <Route path="/pendidikan" element={<Pendidikan />} />
        <Route path="/bencana" element={<Bencana />} />
        <Route path="/kesehatan" element={<Kesehatan />} />
        <Route path="/sosial" element={<Sosial />} />
        <Route path="/teknologi" element={<Teknologi />} />

        <Route path="/zakat" element={<Zakat />} />
        <Route path="/qurban" element={<Qurban />} />

        <Route path="/berlangsung" element={<Berlangsung />} />
        <Route path="/diperpanjang" element={<Diperpanjang />} />
        <Route path="/selesai" element={<Selesai />} />

        <Route path="/berakhir" element={<Berakhir />} />
        <Route path="/populer" element={<Populer />} />
        <Route path="/terbaru" element={<Terbaru />} />
        <Route path="/terlama" element={<Terlama />} />
        <Route path="/mendesak" element={<Mendesak />} />

        <Route path="/detailpendidikan" element={<DetailPendidikan />} />
        <Route path="/detailbencana" element={<DetailBencana />} /> 
        <Route path="/detailkesehatan" element={<DetailKesehatan />} />
        <Route path="/detailsosial" element={<DetailSosial />} />
        <Route path="/detailteknologi" element={<DetailTeknologi />} />
        <Route path="/detailzakat" element={<DetailZakat />} />
        <Route path="/detailqurban" element={<DetailQurban />} />

        <Route path="/paydonasiuang" element={<PayDonasiUang />} />
        
      </Routes>
      {!isLoginPage && <Footer />}
    </>
  );
}

export default App;