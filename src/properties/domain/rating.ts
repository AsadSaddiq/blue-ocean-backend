import { ApiProperty } from '@nestjs/swagger';
import { Property } from './property';
import { User } from '../../users/domain/user';

export class Rating {
  @ApiProperty({
    type: () => Property,
  })
  property: Property;

  @ApiProperty({
    type: () => User,
  })
  user: User;

  @ApiProperty()
  value: number;

  @ApiProperty({
    type: String,
  })
  id: string;
}
