import { MongoError } from 'mongodb';
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
	catch(exception: MongoError, host: ArgumentsHost) {
		const response = host.switchToHttp().getResponse();
		if (exception.code === 11000) {
			response.status(400).json({ message: 'User already exists.' });
		} else {
			response.status(500).json({ message: 'Internal error.' });
		}
	}
}
