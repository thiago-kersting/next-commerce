'use client'

import { ReactNode, useEffect, useState } from "react";
import SkeletonCard from "./SkeletonCard";

export default function Hydrate({children}: {children: ReactNode}) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    return isMounted ? <>{children}</> : (
        <div className="max-w-7xl mx-auto py-8 px-8 xl:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 xl:gap-6">
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
                <SkeletonCard isLoading/>
            </div>
        </div>
    );
}