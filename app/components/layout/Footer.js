import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {
  return (
    <main>
      <footer
        class="text-center text-black"
        style={{ backgroundColor: "#F5F5F5" }}
      >
        <section class="mt-5">
          <div class="d-flex text-center  justify-content-center pt-5">
            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Beranda
                </a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Jelajah
                </a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Upload
                </a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  FAQ
                </a>
              </h6>
            </div>

            <div class="col-md-2">
              <h6 class="text-uppercase fw-bold">
                <a href="#!" class="text-black">
                  Kontak
                </a>
              </h6>
            </div>
          </div>
        </section>

        <hr class="my-5" />

        <section class="mb-5">
          <div class="d-flex justify-content-center">
            <div class="col-lg-8">
              <p>
                Photogood adalah hasil karya kelompok siswa yang ingin
                menyelesaikan tugas akhir agar lulus. Jadi website ini kami buat
                dengan pertimbangan guru pengajar kami.
              </p>
            </div>
          </div>
        </section>

        <section class="text-center mb-5">
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faFacebookF} className="icon-size" />
          </a>
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faTwitter} className="icon-size" />
          </a>
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faGoogle} className="icon-size" />{" "}
          </a>
          <a href="" class="text-black me-4">
            <FontAwesomeIcon icon={faInstagram} className="icon-size" />{" "}
          </a>
        </section>

        <div
          class="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a class="text-black" href="https://mdbootstrap.com/">
            Photogood
          </a>
        </div>
      </footer>
    </main>
  );
};
