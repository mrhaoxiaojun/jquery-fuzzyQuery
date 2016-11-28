//ģ��ƥ�乫˾�� --��ʼ
function getStyle(obj, att) {

    if (window.getComputedStyle) {

        return getComputedStyle(obj, false)[att]

    } else {

        return obj.currentStyle[att];

    }

}

function corpChange(){
	document.getElementById('cpId').value = "";
}

function Suggest(corpName, cpId, suggest, hiddenId) {

console.log(corpName)
    this.oInput = document.getElementById(corpName);
    if (hiddenId) {
        this.oIdInput = document.getElementsByName(cpId)[0];
    } else {
        this.oIdInput = document.getElementById(cpId);
    }

    this.oUl = document.getElementById(suggest);
    this.aLi = this.oUl.getElementsByTagName('li');

    this.index = 1;

    this.aLi_index = []; //�������鱣��Li�����ں���Ķ�����ѡȡLiԪ��

}
//���캯��
Suggest.prototype = {

	init : function(){

		this.toChange();

		this.toBlur();

		this.keyNext();

		this.saveLi();

		this.mouseEvent();

	},//��ʼ��

	toChange : function(){

		var ie = !-[1,];

		var _this = this;
		//���֮ǰ��ѡ
		$("#cpId").val("");
		if(ie){

			this.oInput.onpropertychange = function(){
				_this.oIdInput.value = "";

				_this.tips();

				if(_this.oInput.value == '') return '';

				_this.thowUl();

				_this.toggle_Class(1);

				_this.index = 1;

			}

			//onpropertychange ���¼������ͻᴥ��;����ʱ�����ʱ�򴥷���

		}else {

			this.oInput.oninput = function(){

				_this.oIdInput.value = "";

				_this.thowUl();

				_this.tips();

				_this.toggle_Class(1);

				_this.index = 1;

			};

		}

	},//�¼�����ʱ

	thowUl: function(){

		// this.oUl.style.display = 'block';

	},//��ʾ��

	toBlur : function(){

		var This = this;

		this.oInput.onblur = function(){

			This.oUl.style.display = 'none';

		}

	},//ʧȥ����hidden��

	tips : function(){



		var value = this.oInput.value;

		if(value==''){ this.oUl.style.display = 'none'; return;}
		var isIndex = false;
		for(var i=0;i<this.aLi.length;i++)

		{

			var oName = this.aLi[i].getAttribute('corpname');

			if(oName.lastIndexOf(value) > -1)  //��û����@ʱ��

			{
				this.aLi[i].style.display = 'block';
				isIndex = true;

			}else{

				this.aLi[i].style.display = 'none';

			}

		}
		if(isIndex){
			this.oUl.style.display = 'block';
		}else{
			this.oUl.style.display = 'none';
		}
		this.saveLi();

		//������޸�Li��display���Ա���

	},

	keyNext : function(){

		var _this = this;

		this.oInput.onkeydown = function(e){

			var e = e||event;

			var len = _this.aLi_index;

			if(e.keyCode == 40){

				if(_this.index== len.length-1){

					_this.index=0;

				}

				_this.toggle_Class( len[++_this.index] );

				//�¼�

			}else if(e.keyCode == 38){

				if(_this.index==1){

					_this.index=len.length;

				}

				_this.toggle_Class( len[--_this.index] );

				//�ϼ�

			}else if( e.keyCode==13 ){
				var uservalue = _this.aLi[ len[_this.index] ].innerHTML;
				var oId = _this.aLi[ len[_this.index] ].getAttribute('corpid');
				if(uservalue || uservalue != ''){
					_this.oInput.value = uservalue;
					_this.oIdInput.value = oId;
				}

				_this.oInput.blur();
			}//�س�

		}



	},

	mouseEvent : function(){
		var _this = this;

		for( var i=0;i<this.aLi.length;i++ ){

			(function(i){

				_this.aLi[i].onmouseover = function(){

					_this.toggle_Class(i);

					for(var b=0;b<_this.aLi_index.length;b++){

						if(_this.aLi_index[b]==i){

							_this.index = b;

						}

					}; // ��ö���ҵ������������е�����(����);

					/*

					 1.���鱣���˵�ǰ'block'(��ʾ)�˼���LiԪ��

					 2.���������ֵ������Li������

					 PS: ���ת������  _this.toggle_Class( len[++_this.index] );(����ģʽ);

					 ����ǳ���� _this.index = i; ��ô���統ǰ��'block'��aLi�ĳ�����5��Ҳ�������鳤����5��;

					 �� i ���� �� 14��aLiԪ�ؼ��ϵĳ��ȣ��е��κ�ֵ;��͵����� ���i=14 �����顾14�����󡯣�

					 */

				};

			})(i);//Ϊ�˴��� i ����һ����ִ�У�

			this.aLi[i].onmousedown = function(){

				var oId = this.getAttribute('corpid');
				_this.oInput.value = this.innerHTML;
				_this.oIdInput.value = oId;

			}

		}
		this.oUl.style.display = 'none';
	},

	toggle_Class : function( oIndex ){

		for( var i=0;i<this.aLi.length;i++ ){

			this.aLi[i].className = 'item';

		};

		if(oIndex){

			this.aLi[oIndex].className = 'active';

		}

	},

	saveLi : function(){

		this.aLi_index = [];

		for(var i=0;i<this.aLi.length;i++){

			if( getStyle(this.aLi[i],'display' )!='none' ){

				this.aLi_index.push(i);

			}

		}

	}

}
//---- ģ����ѯ��ҵ ����
