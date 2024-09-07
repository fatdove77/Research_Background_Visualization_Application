import { useState, type ReactNode } from 'react';
// //css
import '@/styles/globals.css'
import '@/styles/style.scss'
import '@rainbow-me/rainbowkit/styles.css'
import React, { lazy, Suspense, useEffect } from 'react'
// //组件
import Layout from '@/component/Layout'
//toast
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/router';
import useGetProfile from '@/hooks/useGetProfile';

const models = {
  useGetProfile
}


function compose(containers: any) {
  return function Component(props: any) {
    return containers.reduceRight(
      (children: any, Container: any) => (
        <Container.Provider>{children}</Container.Provider>
      ),
      props.children,
    );
  };
}

const ComposedStore = compose(Object.values(models));


interface appProps {
  Component: React.ElementType,
  pageProps: Object | String
}




export default function App({ Component, pageProps }: appProps) {
  const router = useRouter()
  useEffect(() => {
    let isLogin = localStorage.getItem('userToken');
    let tokenTime = localStorage.getItem('tokenTime');
    let now = new Date().valueOf();
    if (tokenTime + 3600 * 24 * 7 * 1000 < now && isLogin) {
      toast.error("登陆过期，请重新登陆")
      isLogin = null;
    }
    //检验是否超过七天
    if (isLogin === null) {
      toast.error("登陆过期，请登录")
      router.push('/Login')
    }
    else {
      console.log(location.pathname);
      if (location.pathname == '/Login') {
        toast.success("您已登陆");
        router.push("/Home")
      }
    }
  }, [])
  return (
    <>
      <ComposedStore>
        <Layout>
          <Toaster></Toaster>
          <Component {...pageProps} />
        </Layout>
      </ComposedStore>
    </>
  )
}



