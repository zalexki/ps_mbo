import axios from 'axios';
import _ from 'lodash';

const ajax = axios.create({
    baseURL: adminAjaxController
})

export function request (params) {
    const form = new FormData()
    form.append('ajax', true)
    form.append('action', params.action)

    _.forEach(params.data, function (value, key) {
        form.append(key, value)
    })

    return ajax.post('', form)
        .then(res => res.data)
        .catch(error => {
            console.log(error)
        })
}
