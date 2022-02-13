import React from 'react'
import genesis from './procesados/genesis'
import exodo from './procesados/exodo'
import levitico from './procesados/levitico'
import deuteronomio from './procesados/deuteronomio'
import josue from './procesados/josue'
import jueces from './procesados/jueces'
import rut from './procesados/rut'
import samuel1 from './procesados/1_samuel'
import samuel2 from './procesados/2_samuel'
import reyes1 from './procesados/1_reyes'
import reyes2 from './procesados/2_reyes'
import cronicas1 from './procesados/1_cronicas'
import cronicas2 from './procesados/2_cronicas'
import esdras from './procesados/esdras'
import nehemias from './procesados/nehemias'
import ester from './procesados/ester'
import job from './procesados/job'
import salmos from './procesados/salmos'
import proverbios from './procesados/proverbios'
import eclesiastes from './procesados/eclesiastes'
import cantares from './procesados/cantares'
import isaias from './procesados/isaias'
import jeremias from './procesados/jeremias'
import lamentaciones from './procesados/lamentaciones'
import ezequiel from './procesados/ezequiel'
import daniel from './procesados/daniel'
import oseas from './procesados/oseas'
import joel from './procesados/joel'
import amos from './procesados/amos'
import abdias from './procesados/abdias'
import jonas from './procesados/jonas'
import miqueas from './procesados/miqueas'
import nahum from './procesados/nahum'
import habacuc from './procesados/habacuc'
import sofonias from './procesados/sofonias'
import hageo from './procesados/hageo'
import zacarias from './procesados/zacarias'
import malaquias from './procesados/malaquias'

export const Antiguotestamento = () => {
    const Antiguotestamento = []

    Antiguotestamento.push(genesis, exodo, levitico, deuteronomio, josue, jueces, rut, samuel1, samuel2, reyes1, reyes2, cronicas1, cronicas2, esdras, nehemias,
        ester, job, salmos, proverbios, eclesiastes, cantares, isaias, jeremias, lamentaciones, ezequiel, daniel, oseas, joel, amos, abdias,
        jonas, miqueas, nahum, habacuc, sofonias, hageo, zacarias, malaquias)
    return Antiguotestamento
}
