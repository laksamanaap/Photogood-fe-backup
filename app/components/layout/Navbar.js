import React from "react";
import sutek from "../../assets/icon/logo-pg.png";
import Image from "next/image";
import "@/styles/globals.scss";
import icon from "../../assets/icon/upload.png"


export const Navbar = () => {
  return <main>
    <div className="navbar position-relative">
      <div className="navbar__box-logo">
        <Image className="navbar__pglogo" href="./homepage" src={sutek} alt='logo photogood' ></Image>
      <nav class="navbar navbar-expand-lg bg-body-emphasis position-absolute top-50 end-0">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Jelajah
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="./gif">Gif</a></li>
                  <li><a class="dropdown-item" href="./foto">Foto</a></li>
                  <li><hr class="dropdown-divider"></hr></li>
                  <li><a class="dropdown-item" href="./vektor">Vektor</a></li>
                </ul>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="./login">Masuk</a>
              </li>
              <li class="nav-item">
                <button type="button" class="btn btn-outline-dark emphasis rounded-pill ms-3 me-3" href="./member">Gabung</button>
              </li>
              <li class="nav-item">
              <button class="upload__upload-button" href="./upload">Unggah</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </div>
</main>
};
