#if !defined(DUK_EXTRA_SOCK_H_INCLUDED)
#define DUK_EXTRA_SOCK_H_INCLUDED

/*
https://github.com/diegonehab/luasocket

LuaSocket 3.0 license
Copyright © 2004-2013 Diego Nehab

Permission is hereby granted, free of charge, to any person obtaining a
copy of this software and associated documentation files (the "Software"),
to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense,
and/or sell copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/

/* timeout control structure */
typedef struct t_timeout_ {
    double block;          /* maximum time for blocking calls */
    double total;          /* total number of miliseconds for operation */
    double start;          /* time of start of operation */
} t_timeout;
typedef t_timeout *p_timeout;

#define timeout_iszero(tm)   ((tm)->block == 0.0)

DUK_INTERNAL_DECL double timeout_gettime(void);
DUK_INTERNAL_DECL duk_bool_t duk_timeout_open(duk_context *ctx);

// #ifdef DUK_F_WINDOWS
// typedef SOCKET t_socket;
// #define SOCKET_INVALID (INVALID_SOCKET)
// #else
// typedef int t_socket;
// #define SOCKET_INVALID (-1)
// #endif

// DUK_INTERNAL_DECL duk_bool_t duk_select_open(duk_context *ctx);

#endif // DUK_EXTRA_SOCK_H_INCLUDED
