import { PartialType, OmitType } from "@nestjs/mapped-types";
import { CreatePostDto } from "./create-post.dto";
//PartialType hace que todos los parametros del CreatePostDto son opcionales, sirve para los put a la hora de modificar
//OmitType, recive como parametro la extencion de clase, y como segundo parametro el atributo que no queremos que se modifique, por mas que lo manden
export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ["slug"] as const)
) {}
