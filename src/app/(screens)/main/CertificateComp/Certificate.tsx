"use client"

import UHeadingDesc from '@/app/components/ui-components/UHeadingDesc';
import React from 'react';
import CertificateContent from './CertificateContent';
import { useGetCertificatesQuery } from '@/app/state_management/api/api';

export interface certificateType {
    id: string;
    name: string;
    organisation: string;
    cid: string;
    description: string;
    certificateUrl: string
}

const Certificate = () => {

    const {data, error, isLoading} = useGetCertificatesQuery();
    const certificates: certificateType[] = data?.data.certificates;

    if (isLoading) return <div>Loading...</div>;
    if (error || !certificates) return <div>Error:</div>;

    return (
        <div className="px-4 md:px-8 lg:px-16"> {/* Adjusted padding for larger screens // RESPONSIVE */}
            <UHeadingDesc
                heading="Certificates"
            />

            <div className="space-y-8"> {/* Removed redundant px-4 */}
                {/* Dynamically render certificates using mock data */}
                {certificates.map((item: certificateType, index:number) => (
                    <CertificateContent key={index} data={item}/>
                ))}
            </div>
        </div>
    );
};

export default Certificate;
