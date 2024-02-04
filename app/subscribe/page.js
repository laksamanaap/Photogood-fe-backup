"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UserLayout } from "../components/layout/UserLayout/page";
import gambar1 from "../assets/images/ladybug-8491654_1280.jpg";
import gambar2 from "../assets/images/bear-8364583_1280.png";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="subscribe__box">
          <table className="table table-borderless rounded">
            <thead>
              <tr>
                <th>1</th>
                <th className="text-center">User</th>
                <th className="text-center">
                  <span className="subscribe__text-member">Member</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Download maksimal gambar</td>
                <td className="text-center">3 Gambar</td>
                <td className="text-center">Tidak Terbatas</td>
              </tr>
              <tr>
                <td>Upload gambar maksimal</td>
                <td className="text-center">3 Gambar</td>
                <td className="text-center">Tidak Terbatas</td>
              </tr>
              <tr>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}
