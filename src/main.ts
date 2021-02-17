import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
	try {
		const app = await NestFactory.create(AppModule);

		// Create a silly error that should exit the process:
		throw new Error('Silly error.');
	} catch (err) {
		console.log('Error encountered while running the app.');
		console.error(err);
		process.exitCode = 1; // or process.exit(1)
	}
}
bootstrap();
