
        const cursor = document.querySelector('.cursor');
        if (window.outerWidth >= 700) {
            document.addEventListener('mousemove', e => {
            cursor.setAttribute(
                'style', 'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
            )
        })
        document.addEventListener('click', () => {
            cursor.classList.add('expand');
            setTimeout(() => {
                cursor.classList.remove('expand')
            }, 500);
        })
        }
        
        