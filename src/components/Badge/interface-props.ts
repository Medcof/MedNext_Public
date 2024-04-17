export interface BadgeProps {
  /**
   * Data em formato de string exemplo 00.00.0000
   */
  date: string;
  /**
   * passar um import de imagem
   */
  barCode: string;
  /**
   * Texto que fica a baixo da data
   */
  text: string;
  /**
   * Codigo ao lado do codigo de barras
   */
  textCode: string;
}
