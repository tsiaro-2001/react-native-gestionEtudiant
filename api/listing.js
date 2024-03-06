import client from './etudiant'

const endpoint = '/getEtudiant'
const getEtudiant = () => client.get('endpoint')

export default {
    getEtudiant,
}