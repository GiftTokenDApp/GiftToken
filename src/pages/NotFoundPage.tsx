import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage: React.FC = () => {

    return (
        <div className='w-full flexJIC flex-col gap-12'>
            <span className='text-red-600 font-bold text-4xl'>Erreur !</span>
            <Link to="/accueil" className='btn bg-slate-400'>Retour à l'accueil</Link>
        </div>
    )
}

export default NotFoundPage