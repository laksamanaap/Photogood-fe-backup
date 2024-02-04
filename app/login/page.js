"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <>
            <Navbar />
            <section style={{overflow: 'hidden'}}>
                {/* <!-- Jumbotron --> */}
                <div className="px-4 py-5 px-md-5 text-center text-lg-start">
                    <div className="container">
                        <div className="row gx-lg-5 align-items-center">
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <h1 className="my-5 display-3 fw-bold ls-tight">
                                    Temukan Gambar Dari<br />
                                    <span className="text-primary">Seluruh Dunia</span>
                                </h1>
                                <p style={{ color: 'hsl(217, 10%, 50.8%)' }}>
                                    Photogood adalah hasil karya kelompok siswa yang ingin
                                    menyelesaikan tugas akhir agar lulus. Jadi website ini
                                    kami buat dengan pertimbangan guru pengajar kami.
                                </p>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="card">
                                    <div className="card-body py-5 px-md-5">
                                        <form className="d-flex flex-column">
                                            {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example1" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example1">Username</label>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline">
                                                        <input type="text" id="form3Example2" className="form-control" />
                                                        <label className="form-label" htmlFor="form3Example2">Email</label>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* <!-- Password input --> */}
                                            <div className="form-outline mb-4">
                                                <input type="password" id="form3Example4" className="form-control" />
                                                <label className="form-label" htmlFor="form3Example4">Password</label>
                                            </div>

                                            {/* <!-- Submit button --> */}
                                            <div className="w-100 " style={{display: 'flex', justifyContent: 'center',}}>
                                            <button type="submit" className="btn btn-primary btn-block justify-content-center mb-1 rounded-pill text-white" style={{width: '250px'}}>
                                                Masuk
                                            </button>
                                            </div>

                                            {/* <!-- Register buttons --> */}
                                            <div className="text-center">
                                                <p>Atau daftar melalui</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <FontAwesomeIcon icon={faFacebook} className="icon-size" />
                                                </button>

                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <FontAwesomeIcon icon={faGoogle} className="icon-size" />
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Jumbotron --> */}
            </section>

            <Footer />
        </>
    );
}