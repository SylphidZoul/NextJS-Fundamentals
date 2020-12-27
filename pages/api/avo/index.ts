import { NextApiRequest, NextApiResponse } from 'next'
import DB from '@database'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const db = new DB()
    const allEntries = await db.getAll()
    const lenght = allEntries.length

    res.status(200).json({ data: allEntries, lenght })
  } catch (e) {
    console.error(e)
    res.statusCode = 500
    res.end(
      JSON.stringify({ length: 0, data: [], error: 'Something went wrong' })
    )
  }
}

export default allAvos
