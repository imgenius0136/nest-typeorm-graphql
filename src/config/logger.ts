import { ConsoleLogger } from '@nestjs/common'

export class BlueLogger extends ConsoleLogger {

	log(message: string) {
		super.log("🟢 :: " + message)
	}
	error(message: string) {
		super.error("🔴 :: " + message)
	}
	warn(message: string) {
		super.warn("🟡 :: " + message)
	}
	debug(message: string) {
		super.debug("🔵 :: " + message)
	}
	verbose(message: string) {
		super.verbose(message)
	}

}
