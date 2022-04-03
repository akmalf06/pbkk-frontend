import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

import NotificationDropdown from '@/components/Dropdowns/NotificationDropdown.js';
import UserDropdown from '@/components/Dropdowns/UserDropdown.js';

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState('hidden');
  const router = useRouter();
  return (
    <>
      <nav className='relative z-10 flex flex-wrap items-center justify-between bg-white py-4 px-6 shadow-xl md:fixed md:left-0 md:top-0 md:bottom-0 md:block md:w-64 md:flex-row md:flex-nowrap md:overflow-hidden md:overflow-y-auto'>
        <div className='mx-auto flex w-full flex-wrap items-center justify-between px-0 md:min-h-full md:flex-col md:flex-nowrap md:items-stretch'>
          {/* Toggler */}
          <button
            className='cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden'
            type='button'
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className='fas fa-bars'></i>
          </button>
          {/* Brand */}
          <Link href='/'>
            <a
              href='#pablo'
              className='mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-blueGray-600 md:block md:pb-2'
            >
              Notus NextJS
            </a>
          </Link>
          {/* User */}
          <ul className='flex list-none flex-wrap items-center md:hidden'>
            <li className='relative inline-block'>
              <NotificationDropdown />
            </li>
            <li className='relative inline-block'>
              <UserDropdown />
            </li>
          </ul>
          {/* Collapse */}
          <div
            className={
              'absolute top-0 left-0 right-0 z-40 h-auto flex-1 items-center overflow-y-auto overflow-x-hidden rounded shadow md:relative md:mt-4 md:flex md:flex-col md:items-stretch md:opacity-100 md:shadow-none ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className='mb-4 block border-b border-solid border-blueGray-200 pb-4 md:hidden md:min-w-full'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link href='/'>
                    <a
                      href='#pablo'
                      className='mr-0 inline-block whitespace-nowrap p-4 px-0 text-left text-sm font-bold uppercase text-blueGray-600 md:block md:pb-2'
                    >
                      Notus NextJS
                    </a>
                  </Link>
                </div>
                <div className='flex w-6/12 justify-end'>
                  <button
                    type='button'
                    className='cursor-pointer rounded border border-solid border-transparent bg-transparent px-3 py-1 text-xl leading-none text-black opacity-50 md:hidden'
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}
            <form className='mt-6 mb-4 md:hidden'>
              <div className='mb-3 pt-0'>
                <input
                  type='text'
                  placeholder='Search'
                  className='h-12 w-full rounded border-0 border border-solid  border-blueGray-500 bg-white px-3 py-2 text-base font-normal leading-snug text-blueGray-600 placeholder-blueGray-300 shadow-none outline-none focus:outline-none'
                />
              </div>
            </form>

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='block pt-1 pb-4 text-xs font-bold uppercase text-blueGray-500 no-underline md:min-w-full'>
              Alat - Alat
            </h6>
            {/* Navigation */}

            <ul className='flex list-none flex-col md:min-w-full md:flex-col'>
              <li className='items-center'>
                <Link href='/admin/dashboard'>
                  <a
                    href='#pablo'
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/dashboard') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-tv mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/dashboard') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    Dashboard
                  </a>
                </Link>
              </li>

              <li className='items-center'>
                <Link href='/admin/settings'>
                  <a
                    href='#pablo'
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/settings') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-tools mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/settings') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    Settings
                  </a>
                </Link>
              </li>

              <li className='items-center'>
                <Link href='/admin/tables'>
                  <a
                    href='#pablo'
                    className={
                      'block py-3 text-xs font-bold uppercase ' +
                      (router.pathname.indexOf('/admin/tables') !== -1
                        ? 'text-lightBlue-500 hover:text-lightBlue-600'
                        : 'text-blueGray-700 hover:text-blueGray-500')
                    }
                  >
                    <i
                      className={
                        'fas fa-table mr-2 text-sm ' +
                        (router.pathname.indexOf('/admin/tables') !== -1
                          ? 'opacity-75'
                          : 'text-blueGray-300')
                      }
                    ></i>{' '}
                    Tables
                  </a>
                </Link>
              </li>
            </ul>

            {/* Kalo mau nambahin section baru tinggal uncomment aja */}
            {/* <hr className="my-4 md:min-w-full" />
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Settings
            </h6>

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/auth/login">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-fingerprint text-blueGray-400 mr-2 text-sm"></i>{" "}
                    Login
                  </a>
                </Link>
              </li>

              <li className="items-center">
                <Link href="/auth/register">
                  <a
                    href="#pablo"
                    className="text-blueGray-700 hover:text-blueGray-500 text-xs uppercase py-3 font-bold block"
                  >
                    <i className="fas fa-clipboard-list text-blueGray-300 mr-2 text-sm"></i>{" "}
                    Register
                  </a>
                </Link>
              </li>
            </ul> */}

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='block pt-1 pb-4 text-xs font-bold uppercase text-blueGray-500 no-underline md:min-w-full'>
              Documentation
            </h6>
            {/* Navigation */}
            <ul className='flex list-none flex-col md:mb-4 md:min-w-full md:flex-col'>
              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/colors/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fas fa-paint-brush mr-2 text-base text-blueGray-300'></i>
                  Styles
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/alerts/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fab fa-css3-alt mr-2 text-base text-blueGray-300'></i>
                  CSS Components
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/angular/overview/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fab fa-angular mr-2 text-base text-blueGray-300'></i>
                  Angular
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/js/overview/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fab fa-js-square mr-2 text-base text-blueGray-300'></i>
                  Javascript
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/nextjs/overview/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fab fa-react mr-2 text-base text-blueGray-300'></i>
                  NextJS
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/react/overview/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fab fa-react mr-2 text-base text-blueGray-300'></i>
                  React
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/svelte/overview/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fas fa-link mr-2 text-base text-blueGray-300'></i>
                  Svelte
                </a>
              </li>

              <li className='inline-flex'>
                <a
                  href='https://www.creative-tim.com/learning-lab/tailwind/vue/overview/notus'
                  target='_blank'
                  className='mb-4 block text-sm font-semibold text-blueGray-700 no-underline hover:text-blueGray-500'
                  rel='noreferrer'
                >
                  <i className='fab fa-vuejs mr-2 text-base text-blueGray-300'></i>
                  VueJS
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
