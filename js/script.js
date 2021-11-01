window.addEventListener('DOMContentLoaded', () => {
    const tabContent = document.querySelectorAll('.tabcontent'),
          tabs = document.querySelectorAll('.tabheader__item'),
          tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent (){
        tabContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
            
            
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
            
    };

    function showTabContent (i = 0){
        tabContent[i].classList.add('show', 'fade');
        tabContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        console.log(target)
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) => {
                if(target == item){
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // Modal

    const modalTrigger = document.querySelectorAll('[data-modal]');
    const modalCloseBtn = document.querySelectorAll('[data-close]');
    const modal = document.querySelector('.modal');

    modalTrigger.forEach(button => {
        button.addEventListener('click', () => {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
    });

    function closeModal () {
        modal.classList.remove('show');
        modal.classList.add('hide');
        document.body.style.overflow = '';
    };

    modalCloseBtn.forEach(button => {
        button.addEventListener('click', closeModal)
    });

    modal.addEventListener('click', (e) => {
        if(e.target === modal){
            closeModal();
        }
    })

    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            closeModal();
        };
    });
}) 