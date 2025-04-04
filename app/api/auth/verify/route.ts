import { NextRequest, NextResponse } from 'next/server'

import { prisma } from '@/prisma/prisma-client'

export async function GET(req: NextRequest) {
	try {
		const code = req.nextUrl.searchParams.get('code')

		if (!code) {
			return NextResponse.json({ error: 'Неверный код' }, { status: 400 })
		}

		const verifivationCode = await prisma.verificationCode.findFirst({
			where: {
				code
			}
		})

		if (!verifivationCode) {
			throw NextResponse.json({ error: 'Неверный код' }, { status: 400 })
		}

		await prisma.user.update({
			where: {
				id: verifivationCode.userId
			},
			data: {
				verified: new Date()
			}
		})

		await prisma.verificationCode.delete({
			where: {
				id: verifivationCode.id
			}
		})

		return NextResponse.redirect(new URL('/?verified', req.url))
	} catch (error) {
		console.log(error)
	}
}
