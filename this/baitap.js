const $ = document.querySelector.bind(document); // ràng buộc 1 this với document
const $$ = document.querySelectorAll.bind(document); // ràng buộc nhiều this với document

const app = (() => {
    const cars = ['BMW'];

    const root = $('#root');
    const add = $('#submit');
    const input = $('#input');
    return {
        add(car) {
            cars.push(car);
        },
        delete(index) {
            cars.splice(index, 1);
        },

        render() {
            const html = cars.map((car, index) => `
                <li>
                    ${car}
                    <span class="delete" data-index=${index}> &times </span>
                </li>
                `).join('')
            root.innerHTML = html;
        },

        handleDelete(event) {
            const deleteBtn = event.target.closest('.delete');
            if (deleteBtn) {
                const index = deleteBtn.dataset.index;
                this.delete(index);
                this.render()
            }
        }

        ,
        initial() {
            add.onclick = () => {
                const car = input.value;
                this.add(car);
                this.render();

                input.value = null;
                input.focus();
            }
            root.onclick = this.handleDelete.bind(this); 
            this.render();
        }
    }
})();

app.initial();