import React from "react";
import Footer from "../../components/footer/Footer";
import { me } from "../../Image";
import MainLayout from "../../layout/mainLayout/MainLayout";
import Navbar from "../../components/navbar/Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <MainLayout>
        <div className="row mt-5 mb-5 ">
          <div className="d-flex gap-5">
            <div className="col mb-5 shadow-sm">
              <img src={me} alt="" />
            </div>
            <div className="col">
              <p className="fw-bold text-center fs-4">
                Sosialisasi Program Mahasiswa Informatika UMM
              </p>
              <p>
                {" "}
                Program studi Informatika UMM sukses melaksanakan sosialisasi
                perkuliahan yang mengenalkan dua program penting di Aula Teknik
                GKB 3 Lantai 6. Mahasiswa angkatan 2021 diperkenalkan pada
                program PKN dan MBKM, termasuk langkah pendaftaran hingga
                bimbingannya. Disisi lain, mahasiswa angaktan 2020 diberikan
                penjelasan mengenai langkah-langkah dan arahan yang perlu
                diikuti saat menyelesaikan tugas akhir.
              </p>
              <p>
                Sosialisasi ini diharapkan dapat membantu mahasiswa dalam
                persiapan menghadapi dunia kerja, serta memfasilitasi
                peningkatan kualitas tugas akhir mahasiswa, sehingga dapat lulus
                sesuai dengan target yang ditentukan
              </p>
            </div>
          </div>
        </div>
      </MainLayout>
      <Footer />
    </div>
  );
};

export default About;
