import React from 'react'
import { NavLink } from 'react-router-dom'


function Nav() {
    return (
        <div className='bg-zinc-100 w-full'>
            <nav className='w-[1224px] m-auto flex justify-between align-center  px-7 py-4 pr-9'>
                <div>
                    <h1 className='text-3xl text-pink-500 font-bold'>Logo</h1>
                </div>
                <div className='text-xl font-semibold flex align-center justify-center gap-10'>

                    <NavLink
                        style={(e) => {
                            return {
                                color: e.isActive ? 'grey' : '',
                                textDecoration: e.isActive ? 'underline' : 'none'
                            }
                        }}
                        to="/">Home</NavLink>
                    <NavLink
                        className={(e) => {
                            return [
                                e.isActive ? 'text-pink-500' : 'text-gray-500',
                                e.isActive ? 'font-bold' : '',
                            ].join(" ")
                        }}
                        to="/about">About</NavLink>
                    <NavLink to="/user">
                        {(e) => {
                            return (
                                <span
                                    className={[
                                    e.isActive ? "text-pink-500" : "text-gray-500",
                                     e.isActive ? "font-bold" : "",
                                     ].join(" ")}
                                >User</span>
                            )
                        }}
                    </NavLink>
                    <NavLink
                        style={(e) => {
                            return {
                                color: e.isActive ? 'grey' : '',
                                textDecoration: e.isActive ? 'underline' : 'none'
                            }
                        }}
                        to="/blog">Blog</NavLink>

                </div>
            </nav>
        </div>
    )
}

export default Nav