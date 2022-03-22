import React from "react";

const EmptyPage = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <center><h3>Tentang Kami</h3></center>
                    <p>
                        <b>Frederick Duma & Partners merupakan kantor hukum</b> berkedudukan di Tangerang Selatan yang didirikan oleh Advokat yang berpengalaman dan memiliki integritas dalam menjalankan profesinya. Jasa pelayanan hukum kami diberikan kepada masyarakat baik perorangan maupun badan
                        hukum, yang bersifat litigasi maupun non litigasi. Prinsip utama kami adalah menjaga kepercayaan dan memberikan penyelesaian yang baik kepada klien. Kami berkomitmen untuk selalu siap mendedikasikan diri dalam membantu siapapun yang mencari keadilan baik perorangan maupun
                        badan hukum serta mempertahankan hak-hak serta kepentingan hukumnya selaku pemberi kuasa sebagaimana diatur dalam Undang-undang Nomor 18 Tahun 2003 tentang Advokat.
                    </p>
                    <p>
                        <b>Frederick Duma & Partners</b> menempatkan klien sebagai diri sendiri yang harus dilindungi hak-hak dan kepentingan hukumnya. Tugas dan tanggung jawab kami adalah menyelesaikan permasalahan hukum dengan penyelesaian secara maksimal dan berupaya untuk mengantisipasi
                        permasalahan-permasalahan hukum yang mungkin timbul dikemudian hari.
                    </p>
                    <p>
                        <b>Frederick Duma & Partners</b> didukung oleh tim pengacara yang memiliki integritas yang baik dan berpengalaman dalam menangani berbagai jasa Advokat diantaranya Hukum Perusahaan, Kekayaan Hak Intelektual, Ketenagakerjaan, Hukum Perorangan (Hukum Keluarga), Penanganan
                        utang-piutang, dan lain-lain
                    </p>
                </div>
            </div>
        </div>
    );
};

const comparisonFn = function (prevProps, nextProps) {
    return prevProps.location.pathname === nextProps.location.pathname;
};

export default React.memo(EmptyPage, comparisonFn);
