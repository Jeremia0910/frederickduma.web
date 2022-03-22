import React from "react";

const EmptyPage = () => {
    return (
        <div className="grid">
            <div className="col-12">
                <div className="card">
                    <h3>Frederick Duma & Partners</h3>
                    <p>
                        adalah sebuah kantor hukum dan konsultan hukum yang didirikan dan berkedudukan di Tangerang Selatan untuk memberikan jasa pelayanan hukum kepada masyarakat maupun badan hukum , baik yang bersifat litigasi maupun non litigasi kepada klien secara
                        cepat, tanggap, praktis serta efisien yang menekankan pada etos kerja yang tinggi, profesionalitas, integritas dan bertanggung jawab. Prinsip utama kami adalah menjaga kepercayaan dan kepuasan klien. Kami berkomitmen untuk selalu siap mendedikasikan diri dalam membantu
                        siapapun yang mencari keadilan baik indvidu maupun badan hukum serta mempertahankan hak-hak serta kepentingan hukumnya selaku pemberi kuasa sebagaimana dengan Undang-undang Nomor 18 Tahun 2003 tentang Advokat.
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
